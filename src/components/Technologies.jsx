import Marquee from "react-fast-marquee";

const stack1 = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/ffffff" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/shadcnui/ffffff" },
];

const stack2 = [
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "Mongoose", icon: "https://cdn.simpleicons.org/mongoose/880000" },
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/ffffff" },
    { name: "React Query", icon: "https://cdn.simpleicons.org/reactquery/FF4154" },
    { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio/ffffff" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Railway", icon: "https://cdn.simpleicons.org/railway/ffffff" },
    { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
    { name: "Neon", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAe0lEQVR4AWNwL/ChKx61kHp41ELzw/3bgfglmXg7ORZeBOL/ZOKLlFgoTGxwgdQOAQtHLUQYLExPC7VhcnS1EIq16WghwlJ6WfgSydJ8kBytLdwOY8P4NLcQLSj/09xCNPGXFFtIAG/Hoe8lraqn7Tj05g/dGn/UwlELAW7M40DeDdWbAAAAAElFTkSuQmCC" },
];

export function Technologies() {
    return (
        <div className="flex flex-col gap-6 py-10 w-full overflow-hidden">
            <h2 className="text-3xl font-bold mb-6">Technologies I have used</h2>
            <Marquee speed={50} direction="left" pauseOnHover gradient={false}>
                {stack1.map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 mx-4 bg-[#1a1a1a] border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                        <span className="font-semibold text-sm text-white whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </Marquee>
            <Marquee speed={50} direction="right" pauseOnHover gradient={false}>
                {stack2.map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 mx-4 bg-[#1a1a1a] border border-neutral-800 rounded-xl hover:border-neutral-500 transition-colors">
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                        <span className="font-semibold text-sm text-white whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}