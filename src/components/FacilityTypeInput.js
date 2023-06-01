import { SelectInput } from "./Selectlist";

export const FacilityTypeInput=({facility,actions})=>{
    const modify_facility = facility
    const onchange = (value) => {
        console.log("hh",value)
        console.log("changed", value)
        const newType={
            id:value.type.id,
            name:value.type.name
        }
        const payload = {
            lastchange: modify_facility.lastchange,
            facilitytypeId: value.type.id,
            id: modify_facility.id
        }
        actions.FacilityTypeAsyncUpdate(payload)         
        actions.onFacilityTypeUpdate({facility,newType})
    }
    return <SelectInput id={facility.id}
                        value={facility.type.id} 
                        placeholder={facility.type.name}
                        onChange={onchange} />
}