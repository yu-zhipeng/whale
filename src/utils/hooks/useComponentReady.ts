export default (name: string, props: Record<any, any>) => {
    // if(props){
    // }
    return {
        classPrefix: 'w-'+ name,
    }
}