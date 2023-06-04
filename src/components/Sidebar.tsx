import {Stack} from '@mui/material';
import {categories} from "../utils/constants";

interface ISidebarProps {
  selectedCategory: string
  setSelectedCategory: any
}

const Sidebar = (props: ISidebarProps) => {
  const {selectedCategory, setSelectedCategory} = props

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: {sx: "auto", md: "95%"},
        flexDirection: {md: "column"}
      }}
    >
      {categories.map(category =>
          <button
            onClick={()=>{setSelectedCategory(category.name)}}
            className={"category-btn"}
            style={{
              background: category.name === selectedCategory ? "#fc1503" : "#000",
              color: "#fff"
            }}
            key={category.name}
          >
            <span style={{color: category.name === selectedCategory ? "white" : "red", marginRight: 15}}>
              {<category.icon/>}
            </span>
            <span
              style={{opacity: category.name === selectedCategory ? 1 : .8}}
            >
              {category.name}
            </span>
          </button>
      )}
    </Stack>
  );
};

export default Sidebar;