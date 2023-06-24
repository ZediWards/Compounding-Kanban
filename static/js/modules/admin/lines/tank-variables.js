// Global
vGallons = 100
cpg12Oz = 10

// Tank 1
const tank1MaxGallons = 4000
const tank1BottomPropGallons = 600


// Progress bar
// get can couter to gallons left
// 100% = tankmax
// tankmax - gallonscounter = gallonsleft / max *100 = % left
// v/max = %v
// propGal / max*100 = prop%
// round to nearest 100 before math
// if galleft < propGal => prop=100% && v=v's%
// if galLeft > propGal => prop @ prop% && max=100%


// Ideas
// submit puts to db and DOM values change
// click app.gets and populates data