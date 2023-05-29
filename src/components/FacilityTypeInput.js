import { SelectInput } from "./Selectlist";

export const FacilityTypeInput=({facility,actions})=>{
    const onchange = (value) => {
        console.log("changed", value)
        const newType = {
             id:value.type.id,
             name:value.type.name
        }
        const updatedFacility = {
            ...facility,
            facilityTypeId: newType.id,
        }

        actions.onFacilityTypeUpdate({facility, newType })

        /*actions.FacilityAsyncUpdate({updatedFacility})
            .then(json=>console.log("FacilityTypeInput", json.data.facilityUpdate.msg))*/
        actions.FacilityAsyncUpdate(updatedFacility).then((json) => {
                console.log(json); 
                console.log("FacilityTypeInput", json.data.facilityUpdate.msg);
              });
        
    }
    return <SelectInput id={facility.id}
                        value={facility.type.id} 
                        placeholder={facility.type.name}
                        onChange={onchange} />
}