import { SelectInput } from "./Selectlist";

export const FacilityTypeInput=({facility,actions})=>{
    // const modify_facility = facility
    const onchange = (value) => {
        console.log("FacilityTypeInput.onchange", value)
        // const newType={
        //     id:value.type.id,
        //     name:value.type.name
        // }
        // console.log("lastchange", facility.lastchange)
        // const payload = {
        //     lastchange: modify_facility.lastchange,
        //     facilitytypeId: value.type.id,
        //     id: modify_facility.id
        // }
        actions.FacilityUpdateAsyncAction({...facility, facilitytype_id: value.type.id})
        // actions.onFacilityTypeUpdate({facility,newType})
    }
    return <SelectInput id={facility.id}
                        value={facility.type.id} 
                        placeholder={facility.type.name}
                        onChange={onchange} />
}