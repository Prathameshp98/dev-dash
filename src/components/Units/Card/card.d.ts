import { ReactNode } from "react";

export default interface CardProps {
    children: ReactNode;
    heading?: string;
    width: number;
    height: number;
}