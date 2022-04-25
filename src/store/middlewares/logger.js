export const logger = (store) => (next) => (action) => {
    console.log("dispathing >>", action);
    console.log("prev state >>", store.getState());

    const result = next(action);

    console.log("next state >>", store.getState());

    console.log("_______________________________")

    return result;
}