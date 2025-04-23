import React from 'react';


const ProgressBar = ({className, min=0, max=100, refreshInterval=100, getProgressValue, onChange}) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const tick = setInterval(() => {
            const val = getProgressValue();
            setProgress(val);
        }, refreshInterval)
        return () => clearInterval(tick);
    }, [])

    return <input type="range" className={className} min={min} max={max} value={progress} onChange={onChange} />
}

export default ProgressBar;