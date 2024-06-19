import "../../css/app.css";

export default function CarouselHome() {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-fit">
                    <img
                        src="https://image.tmdb.org/t/p/original/veIyxxi5Gs8gvztLEW1Ysb8rrzs.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item2" className="carousel-item w-fit">
                    <img
                        src="https://image.tmdb.org/t/p/original/v6c8WeF21R9gzrIIyfcM9y5xzJz.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item3" className="carousel-item w-fit">
                    <img
                        src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item4" className="carousel-item w-fit">
                    <img
                        src="https://image.tmdb.org/t/p/original/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                    1
                </a>
                <a href="#item2" className="btn btn-xs">
                    2
                </a>
                <a href="#item3" className="btn btn-xs">
                    3
                </a>
                <a href="#item4" className="btn btn-xs">
                    4
                </a>
            </div>
        </div>
    );
}
