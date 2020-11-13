import moment from 'moment';


export const preparteEvent=(events=[])=>{

    return events.map(
        (e)=>({
            ...e,
            //cambiamos de tipo string a tipo date
            end:moment(e.end).toDate(),
            start:moment(e.start).toDate(),
        })
    );
}