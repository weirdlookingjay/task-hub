import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContextProvider } from "../contextAPI";

export default function DarkMode() {
    const { isDark, setIsDark } = useGlobalContextProvider();

    return (
        <div>
            <div
                className={`${isDark ? "bg-mainColor" : "border bg-transparent"
                    } rounded-3xl border-gray-300 h-[33px] w-[59px] flex relative cursor-pointer`}
            >
                <div
                    onClick={() => {
                        setIsDark(!isDark);
                    }}
                    className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out`}
                >
                    <div className={`rounded-full h-[23px] w-[23px] ${isDark ? "bg-white" : "bg-slate-300"} absolute top-[5px] ${isDark ? "left-[34px]" : "left-[4px]"} flex items-center justify-center transition-all`}>
                        <FontAwesomeIcon
                            className={`${isDark ? "text-mainColor" : "text-white"}`}
                            height={12}
                            width={12}
                            icon={isDark ? faMoon : faSun}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
