import Hebcal from "hebcal";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

export const useGetzman = (zmanim, type = 'getZemanim') => {

  const { location } = useSelector(state => state)

  useEffect(() => {
    console.log(zmanim);
  }, [location])

  const myDate = new Date();
  const Latitude = location.Latitude;
  const Longitude = location.Longitude;

  const hebcal = new Hebcal.HDate(myDate);
  hebcal.setCity(location.name);
  hebcal.setLocation(Latitude, Longitude);

  if (type == 'getDay') {
    return hebcal.getDay()
  }
  if (type == 'toStringDay') {
    return hebcal.toString('h')
  } 
  if (type == 'dafyomi') {
    return hebcal.dafyomi('h')
  }
   if (type == 'getSedra') {
    return hebcal.getSedra('h')
  }
  


const Zemanim = hebcal.getZemanim('h');

return Zemanim[zmanim]
}