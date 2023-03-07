# Readings: Images, Color, Text

This topic is important to me because I want to get better at styling, and I want to practice my HTML skills.

## References 

<https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML>.
<https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types>.
<https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format>.
<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color>.
<https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals>.


## Images in HTML

Tags are <>

**Img Tag** - is used to implement a single image on a web page.

Its a void element (cannot have child content and cannot have an end tag).

Two attributes to be useful - arc and alt.

**src** - contains the url pointing to the image.

**alt** - is used to describe the image. (accessibility)

**width and height** - is used to set the size of the image.

(Its best to not do this cause your image can look different).

**title** - is used to title the image (on hover).

### Annotating Images

To do this you can use the figure tag, and then when you want to add a caption, add the figcaption tag.

                <figure>
                    <img
     src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

     <figcaption>
    A T-Rex on display in the Manchester University Museum.
     </figcaption>
    </figure>


### CSS Embeded

CSS can be used to put images in the page. background-image: url() can be used to put the src of the image in.

CSS backgrounds are for decoration only, so HTML images shine.

### Image File Types

<https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types>.

APNG - used for lossless animation sequences.

AVIF - Good choice for both images and animated images.

GIF - Simple images and animations.

JPEG - Good choice for lossy compression of still images.

PNG - Prefered over JPEG for more precise reproduction of src image, or when transparency is needed.

SVG - Ideal for user interface elements, icons, diagrams, that must be drawn accurately at different sizes.

WebP - Best for both images and animated images.

### Choosing an image format

Photographs = WebP or JPEG.

Icons = SVG, Lossless WebP, or PNG.

Screenshots = WebP or PNG (JPEG if compression is not concern).

Diagrams, drawings, and charts = SVG (lastly PNG).

Use picture tag in order to have fallbacks for one not working.

## HTML Questions!

1. When you want someone to be able to know what the image is without the image loading. In case of bad wifi, or accessibility.

2. Adding a alt attribute, or annotating with figure and figurecaption.

3. When you want to caption an image.

4. A gif is for simple photos or animated sequences. A SVG is for detail orientated designs.

5. WebP for good and not compression losing of detail as well.'

## CSS (Coloring and Styling HTML Text Elements)

color - The color to use when drawing the text and any text decorations (such as the addition of under- or overlines, strike-through lines, and so forth.

background-color - the text's background color.

text-shadow - the shadow of the text.

text-decoration-color - underlines and strikethroughs color.

text-emphasis-color - used primarily when drawing text for East Asian languages. The emphasis symbols.

caret-color - the text input cursor.

Boxes: Borders, background-color, column-rule-color,  outline-color.

### Styling HTML Elements

color - sets the foreground content of the selected element.

font-family - sets the font.

font-size - changes the size of the text.

## CSS Questions

1. Foreground colors includes things like the text and decoration for the text. Background colors would be the back of those elements, such as everything in the border.

2. Give his p tag coloring, his site a background color, each section has a border color.

3. That in case one doesn't work, you have backups.

4. Font-size changes the size of the text, font-weight determines its look like bold, and font-style determines if its italic etc.

5. You can use letter spacing, to space out the text.

## Things i want to know more about

How do I learn matching colors for good web design?

How can certain designs make your site unusable?