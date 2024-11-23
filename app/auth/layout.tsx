import { LayoutInterface } from "../utils/interfaces";

export default function layout({ children }: Readonly<LayoutInterface>) {
    return (
        <>
            {children}
        </>
    );
};
