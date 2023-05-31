import { SelectInput } from "./Selectlist";

export const FacilityTypeInput=({facility,actions})=>{
    const modify_facility = facility
    console.log(modify_facility)
    const onchange = (value) => {
        console.log("changed", value)     
        console.log("hhh",value)  
        const payload = {
            lastchange: modify_facility.lastchange,
            facilitytypeId: value.type.id,
            id: modify_facility.id
        }
        actions.FacilityTypeAsyncUpdate(payload)
            
    }
    return <SelectInput id={facility.id}
                        value={facility.type.id} 
                        placeholder={facility.type.name}
                        onChange={onchange} />
}