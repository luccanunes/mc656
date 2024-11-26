import { cn } from "@/app/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    backgroundImage,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    backgroundImage?: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white  justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            {/* Usando o componente Next.js Image para o fundo */}
            <div className="">
                <Image
                    src={backgroundImage || "/fallback.jpg"} // Fallback caso nenhuma imagem seja fornecida
                    alt="Background"
                    fill
                    className={cn("h-40 w-full object-cover ")}
                    priority
                />
            </div>
            <div className="z-50 group-hover/bento:translate-x-2 transition duration-200 ">
                <div
                    className="font-sans font-bold text-white mb-2 mt-2"
                    style={{
                        textShadow: "4px 4px 5px rgba(0, 0, 0, 1)"
                    }}
                >
                    {title}
                </div>
                <div
                    className="font-sans font-normal text-white text-xs"
                    style={{
                        textShadow: "4px 4px 5px rgba(0, 0, 0, 1)"
                    }}
                >
                    {description}
                </div>
            </div>
        </div>
    );
};
