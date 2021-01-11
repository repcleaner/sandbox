export default function hasSelectedLocation({store, redirect}){
    if(store.state.funnel_link){
        return redirect('/profile');
    }
}