interface Title {
    title: string
}

export default function BoxLogo(props: Title): JSX.Element {
    const { title } = props;

    return (<>
        <div className='logo'>
            <div className="circle-logo">
                <div className="box-logo">
                    <div className='shadow'> {title}</div>
                </div>
            </div>
        </div>

    </>);
}