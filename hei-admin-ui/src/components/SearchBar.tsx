import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return (
        <div style={{ width : '11vw' , position: 'absolute' , top: '12%' , right: '10%'}} >
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
             
        </div>
    )
}