import Navabr from "../components/Navabr";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <Navabr />
            {children}
        </main>
    )
}