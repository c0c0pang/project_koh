export const LectureKeyApi = "/api/test/";
export const LectureViewKeyApi="/api/test/?format=json";
export const LectureDeleteKeyApi = (id)=>{
    return `/api/test/${id}/delete_lecture/`
};
export const LecturePutKeyApi = (id)=>{
    return `/api/test/${id}/updeate_lecture/`
};
export const LectureGetKeyApi = (id)=>{
    return `/api/test/${id}/`
};
export const LectureSearchApi = (target)=>{
    return `/api/test/search/?format=json&search=${target}`
};
export const UserKeyApi = "/user/";
export const UserViewKeyApi = "/user/?format=json";