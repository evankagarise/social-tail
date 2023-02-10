export default function Avatar({size}) {
    let big = Boolean;
    let width = 'w-12'
    if ( size === 'big') {
        width = 'w-36'
    }
    return(
        <div className={`${width} rounded-full overflow-hidden`}>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />
            </div>
    )
}