// .js : 순수 지바스크립트 파일 만들 때
// .jsx : React 컴포넌트 파일 만들때 => return에서 화면을 그리는 내용이 담겨 있을때
import styles from "./MovieCard.module.css";

function MovieCard({ poster, title, overview, vote_average }) {
    return (
        <div className={styles.movie}>
            <img
                className={"style.poster"}
                src={"https://image.tmdb.org/t/p/w500"+poster}
                alt={"POSTER"}
            />
            <div className={"styles.movie-Content"}>
                {/*
                    라액트 내부에서 이동을 시킬 대에는 a 태그를 사용하지 말고 Link 기능 사용해야함
                    a태그는 href를 통해 이동시킬 주소를 기재하지만,
                    Link는 to를 통해 이동시킬 주소를 기재함.
                    당연히 외부로 이동 시킬때 (예. 네이버) 할때는 a 태그를 써줘야함
                */}
                <Link className={styles.movieTitle} to={"/abc"}>{title}</Link>
                <h5 className={styles.movieVoteAverage}>{vote_average}</h5>
                <h6 className={styles.movieOverview}>{overview}</h6>
            </div>
        </div>
    );
}

export default MovieCard;



