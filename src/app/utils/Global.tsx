
interface likeParams {
    type: string,
    id: string
}

const hasAlreadyLiked = (params: likeParams) => {
    const liked = localStorage.getItem("liked")
    if(liked) {
       try {
            const parsed = JSON.parse(liked);
            const filtered = parsed.filter(like => like.type === params.type && like.id === params.id)
            if(filtered.length === 0) {
                return false;
            }
            return true;
       }catch(error) {
        return false;
       }
    }
    return false;
}

export const getAllLikes = () => {
    if(localStorage.getItem("liked") !== null){
        return JSON.parse(localStorage.getItem("liked")!);
    }
    return [{}];
}

export default hasAlreadyLiked;