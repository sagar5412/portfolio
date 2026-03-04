import EncryptedTextName from "./encrypted-text-name"
import Typewriter from "./ui/typewriter"

export function Hero() {
    return <>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-start gap-12">
                <div className="flex shrink-0">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/023/506/852/non_2x/cute-kawaii-mushroom-chibi-mascot-cartoon-style-vector.jpg"
                        alt="Hero Graphic"
                        className="w-48 h-48 object-cover rounded shadow-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <div className="text-2xl font-bold">Hi,</div>
                    <div className="text-3xl font-bold sm:text-5xl"><EncryptedTextName /></div>
                    <div><Typewriter /></div>
                </div>
            </div>
            <div className="text-lg text-[#CBCBCB]">
                I am a <b className="text-white">Full Stack Developer</b> with hands-on experience in building and deploying real-world projects. I specialize in developing scalable, efficient, and user-friendly applications with a strong focus on clean architecture and seamless user experiences.
            </div>
        </div>
    </>
}