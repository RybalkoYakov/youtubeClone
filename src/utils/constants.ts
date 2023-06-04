import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export interface ICategory {
  name: string,
  icon: OverridableComponent<SvgIconTypeMap>
}

export const categories = [
  { name: 'New', icon: HomeIcon } as ICategory,
  { name: 'Coding', icon: CodeIcon} as ICategory,
  { name: 'ReactJS', icon: CodeIcon} as ICategory,
  { name: 'NextJS', icon: CodeIcon} as ICategory,
  { name: 'Music', icon: MusicNoteIcon} as ICategory,
  { name: 'Education', icon: SchoolIcon} as ICategory,
  { name: 'Podcast', icon: GraphicEqIcon} as ICategory,
  { name: 'Movie', icon: OndemandVideoIcon} as ICategory,
  { name: 'Gaming', icon: SportsEsportsIcon} as ICategory,
  { name: 'Live', icon: LiveTvIcon} as ICategory,
  { name: 'Sport', icon: FitnessCenterIcon} as ICategory,
  { name: 'Fashion', icon: CheckroomIcon} as ICategory,
  { name: 'Beauty', icon: FaceRetouchingNaturalIcon} as ICategory,
  { name: 'Comedy', icon: TheaterComedyIcon} as ICategory,
  { name: 'Gym', icon: FitnessCenterIcon} as ICategory,
  { name: 'Crypto', icon: DeveloperModeIcon} as ICategory,
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Fake YouTube';
export const demoVideoTitle = 'Just Simple Copy of YouTube';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
