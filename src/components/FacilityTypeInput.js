import { SelectInput } from "./Selectlist";

export const FacilityTypeInput=({facility,actions})=>{
    
    const onchange = (value) => {
        console.log("FacilityTypeInput.onchange", value)
       
        actions.FacilityUpdateAsyncAction({...facility, facilitytype_id: value.type.id})
    }
    return <SelectInput id={facility.id}
                        value={facility.type.id} 
                        placeholder={facility.type.name}
                        onChange={onchange} />
}