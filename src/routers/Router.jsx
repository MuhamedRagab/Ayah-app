import { Notifications } from "react-push-notification";
import Header from "../components/Header";
import TimerDuration from "../components/TimerDuration";
import { useEffect } from "react";
import activeNotification from "../utils/activeNotification";

const Router = () => {
  const { REACT_APP_ENDPOINT } = process.env;
  let ayahNumber = Math.floor(Math.random() * 6236) + 1;

  const fetchAyah = async () => {
    const response = await fetch(`${REACT_APP_ENDPOINT}/${ayahNumber}`);
    const { data: ayah } = await response.json();
    activeNotification(ayah);
  };

  useEffect(() => {
    if (localStorage.getItem("timeDuration") === null) {
      localStorage.setItem("timeDuration", 1);
    }
    fetchAyah();
    let timeDuration = localStorage.getItem("timeDuration");
    let interval = setInterval(
      () => fetchAyah(),
      timeDuration ? timeDuration * 60000 : 60000
    );

    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-[100vh] bg-slate-800 text-white">
      <Notifications />
      <Header />
      <main className="px-4">
        <TimerDuration />
      </main>
    </div>
  );
};

export default Router;
