import { useState, useEffect, useMemo } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

const YEARS = [2025, 2026];

function generateSkeletonData(year) {
    const data = [];
    const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        data.push({
            date: d.toISOString().split('T')[0],
            count: 0,
            level: 0,
        });
    }
    return data;
}

export default function GithubHeatMap() {
    const [selectedYear, setSelectedYear] = useState(2026);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const skeletonData = useMemo(() => generateSkeletonData(selectedYear), [selectedYear]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        async function fetchContributions() {
            try {
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/sagar5412?y=${selectedYear}`
                );
                if (!response.ok) throw new Error('Failed to fetch');
                const json = await response.json();
                setData(json.contributions);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchContributions();
    }, [selectedYear]);

    const calendarData = loading || error || !data ? skeletonData : data;

    return (
        <div className="flex flex-col gap-6 py-10 w-full">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold">GitHub Contributions</h2>
                <div className="flex gap-2">
                    {YEARS.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors border
                                ${selectedYear === year
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-white'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
            <div className={`p-6 bg-[#1a1a1a] border border-neutral-800 rounded-xl w-full flex justify-center overflow-hidden no-scrollbar ${loading ? 'opacity-50 animate-pulse' : ''}`}>
                <ActivityCalendar
                    data={calendarData}
                    colorScheme="dark"
                    theme={{
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    fontSize={14}
                    blockSize={10}
                    blockMargin={3}
                />
            </div>
        </div>
    );
}