import { NavLink, useRouteError } from "react-router-dom";

function ErrorDetail() {
  const error = useRouteError() as { status?: number };
  return (
    <>
      <main className="flex h-full w-fit flex-col !mx-auto items-center justify-center text-center">
        <h1 className="textPreset1">
          We can't seem to find the page you're looking for.
        </h1>
        <p className="textPreset4 text-neutral-600 dark:text-neutral-400">Error code: {error.status}</p>
        <NavLink
          to={"/"}
          className="!my-6 !underline !decoration-blue-500 underline-offset-3 dark:!decoration-blue-700"
        >
          Click here
        </NavLink>
      </main>
    </>
  );
}

export default ErrorDetail;
