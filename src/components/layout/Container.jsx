import clsx from 'clsx';

const Container = ({ children, className }) => {
    return (
        <div className={clsx('max-w-7xl mx-auto container-padding', className)}>
            {children}
        </div>
    );
};

export default Container;
