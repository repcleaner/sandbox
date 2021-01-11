export default function hasSelectedLocation({store, redirect}){
    if(!store.state.place_id){
        return redirect('/demo');
    }
}