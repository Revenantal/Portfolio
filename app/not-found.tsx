import HtmlText from "@/components/html-text";
import { NotFound as NotFoundAnimation } from "@/components/NotFound";



export default function NotFound() {
  return (
    <div className="flex w-full h-96 items-center justify-center text-center">
      <div className="">
        
      <NotFoundAnimation />
        <h1 className="text-4xl">
          <HtmlText htmlTag="h1">Page Not Found</HtmlText>
        </h1>
      </div>
    </div>
  );
}
