import errorGif from '../../../public/404/404.gif'

const ErrorPage = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <img src={errorGif} alt="" />
        </div>
    );
};

export default ErrorPage;