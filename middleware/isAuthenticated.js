export default function hasSelectedLocation({store, redirect}){
    if(!store.state.token && !store.state.verify_token){
        return redirect('/demo');
    }
}