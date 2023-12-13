<!-- 
In Vue.js, there are several methods and directives used for data binding, allowing you to establish a connection between your JavaScript data (model) and the DOM elements in your template. Here are some key methods and directives for data binding:

-Interpolation (Text Content Binding):

Using double curly braces {{ }} to bind data directly into text content.
html
 
<p>{{ message }}</p>
-Attribute Binding:

-Using v-bind directive or shorthand : to bind data to HTML attributes.
html
 
<img v-bind:src="imageUrl" alt="Image" />

<img :src="imageUrl" alt="Image" />
Class Binding:

-Using v-bind:class or shorthand :class to conditionally apply classes.
html
 
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>

<div :class="{ active: isActive, 'text-danger': hasError }"></div>
Style Binding:

-Using v-bind:style or shorthand :style to bind inline styles.
html
 
<div v-bind:style="{ color: textColor, fontSize: fontSize + 'px' }"></div>

<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>
List Rendering (Array Binding):

-Using v-for directive to iterate over an array and render a list.
html
 
<ul>
  <li v-for="item in items">{{ item.name }}</li>
</ul>
Conditional Rendering:

-Using v-if, v-else-if, and v-else directives for conditional rendering.
html
-
<p v-if="isVisible">This is visible</p>
<p v-else>This is hidden</p>
Two-Way Data Binding (v-model):

-Using v-model to achieve two-way binding on form input elements.
html
-
<input v-model="message" />
These methods and directives are fundamental to Vue.js and provide a powerful way to create dynamic and reactive user interfaces. They ensure that changes in the data model are reflected in the view, and vice versa, creating a seamless and reactive user experience.

    
 -->