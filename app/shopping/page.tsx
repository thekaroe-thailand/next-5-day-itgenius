import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import Checkbox from "../checkbox/page";

export default function Page() {
    return (
        <div className="text-center mt-10 text-2xl">
            <Checkbox label="java" />
            <Checkbox label="python" />
            <Checkbox label="javascript" />

            <Header title="Shopping" description="This is a shopping page" />

            <div>Server Component</div>
            <ServerComponent />

            <div>Client Component</div>
            <ClientComponent />
        </div>
    )
}