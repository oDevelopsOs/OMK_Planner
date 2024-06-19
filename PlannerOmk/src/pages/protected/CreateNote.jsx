import { Suspense, lazy } from "react";

const Assitant = lazy(() => import("../../components/Assitant"));
const BookMark = lazy(() => import("../../components/BookMark"));
const DashHeader = lazy(() => import("../../components/DashHeader"));
const DashNav = lazy(() => import("../../components/DashNav"));
const Note = lazy(() => import("../../components/Note"));
const Profile = lazy(() => import("../../components/Profile"));
const ToDo = lazy(() => import("../../components/ToDo"));

export default function CreateNote() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Assitant />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DashHeader />
      </Suspense>
      <div className="h-fit w-fit">
        <Suspense fallback={<div>Loading...</div>}>
          <DashNav />
        </Suspense>
      </div>
      <div className="md:flex p-2">
        <Suspense fallback={<div>Loading...</div>}>
          <Note />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ToDo />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BookMark />
        </Suspense>
      </div>
     
    </div>
  );
}
