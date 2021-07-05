// wrapper is used to return children without returning containing div inside JSX)
// to avoid using many nested div 

const wrapper = props => {
    return props.children
}

export default wrapper