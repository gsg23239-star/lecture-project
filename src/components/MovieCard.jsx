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
                <h2 className={styles.movieTitle}>{title}</h2>
                <h5 className={styles.movieVoteAverage}>{vote_average}</h5>
                <h6 className={styles.movieOverview}>{overview}</h6>
            </div>
        </div>
    );
}

export default MovieCard;



