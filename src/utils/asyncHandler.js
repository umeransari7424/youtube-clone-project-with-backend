// const asyncHandler = (requestHandlerFn) => async(err, req, res, next) => {
//     try{
//         await requestHandlerFn( req, res, next);
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message || "Internal Server Error"
//         });
//     }
// }

const asyncHandler = (requestHandlerFn) => async (err, req, res, next) => {
    Promise.resolve(requestHandlerFn(req, res, next)).catch(next(err));
};
export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (fn) => {()=>{}}
// const asyncHandler = (fn) => ()=>{}
// const asyncHandler = (fn) => async()=>{}
