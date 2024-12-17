import React from "react";

const SaveData = () => {
  return <div>

    <div className={style.match_after} onClick={handleClick}>
      <div className={style.left_Content}>
        <div className={style.time}>
          {data.scores.home !== null ? (
            <>
              <p>
                {data.scores.home} : {data.scores.away}
              </p>
            </>
          ) : (
            <p>{data.time}</p>
          )}
          <p>{data.status.short}</p>
        </div>
        <div className={style.teams}>
          <div className={style.team} id={data.teams.home.name}>
            <div className={style.team_logo}>
              <Image
                src={data.teams.home.logo}
                alt="Premier League"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className={style.team_name}>{data.teams.home.name}</div>
          </div>
          <div className={style.team} id={data.teams.away.name}>
            <div className={style.team_logo}>
              <Image
                src={data.teams.away.logo}
                alt="Premier League"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
            <div className={style.team_name}>{data.teams.away.name}</div>
          </div>
        </div>
      </div>
      <div className={style.right_Content}>
        <CiStar
          onClick={() => setStarClick(!starClick)}
          className={style.star_icon}
        />
      </div>
    </div>

  </div>;
};

export default SaveData;
