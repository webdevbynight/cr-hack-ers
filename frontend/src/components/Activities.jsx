import { useState } from "react";

const activities = [
  {
    id: 1,
    url: "https://i.pinimg.com/originals/cb/21/ed/cb21edb8fb3bda28b8d0b3f15aa11964.jpg",
    title: "Rodéo Shark 150€/1h",
    message:
      "Tentez l’experience ultime qui va vous faire vibrer les nageoires. Montez sur le shark et resistez a sa puissance",
  },
  {
    id: 2,
    url: "https://i0.wp.com/www.myconfinedspace.com/wp-content/uploads/2008/05/shark-rider.jpg?resize=500%2C323&ssl=1",
    title: "Rodéo Shark 150€/1h",
    message:
      "Tentez l’experience ultime qui va vous faire vibrer les nageoires. Montez sur le shark et resistez a sa puissance",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14C7Z2-S8VuePAJ0rzn5xaRJre5Aq1TTTN8vAiFRKCmu-kzXXBk7jHSCyEI_WOSJK08A&usqp=CAU",
    title: "Rodéo Shark 150€/1h",
    message:
      "Tentez l’experience ultime qui va vous faire vibrer les nageoires. Montez sur le shark et resistez a sa puissance",
  },
  {
    id: 4,
    url: "https://i0.wp.com/www.myconfinedspace.com/wp-content/uploads/2008/05/shark-rider.jpg?resize=500%2C323&ssl=1",
    title: "Rodéo Shark 150€/1h",
    message:
      "Tentez l’experience ultime qui va vous faire vibrer les nageoires. Montez sur le shark et resistez a sa puissance",
  },
];

function Activities() {
  const [activitiesIndex, setActivitiesIndex] = useState(0);

  return (
    <>
      <h2>Activités</h2>
      <div className="activities-container">
        {activitiesIndex > 0 && (
          <button
            type="button"
            aria-label="previousBtn"
            className="previousBtn"
            onClick={() => {
              setActivitiesIndex(activitiesIndex - 1);
            }}
          />
        )}

        <img src={activities[activitiesIndex].url} alt="location img" />
        <div className="text-container">
          <h3>{activities[activitiesIndex].title}</h3>
          <p>{activities[activitiesIndex].message}</p>
        </div>

        {activitiesIndex < activities.length - 1 && (
          <button
            type="button"
            aria-label="nextBtn"
            className="nextBtn"
            onClick={() => {
              setActivitiesIndex(activitiesIndex + 1);
            }}
          />
        )}

        <button type="button" aria-label="addBtn" className="addBtn">
          ADD
        </button>
      </div>
    </>
  );
}

export default Activities;
