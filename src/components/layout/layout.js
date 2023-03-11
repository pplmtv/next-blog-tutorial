import Navigaion from "./navigation";


export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigaion />
            <main classnName="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
                {props.children}
            </main>
            <footer clanssName="flex items-center justify-center w-full h-20 text-sm border-t">
                ©︎2023 NextJS Startup
            </footer>
        </div>
    );
}