---
title: Trying out Fractal Flame Visualizations
description: A neat algorithm for pretty visualizations.
date: 2025-04-23
tags:
- fractal-flame
- algorithms
- publish
---

::: {.row}

::: {.col-xl-6}
Another day, another cool algorithm discovered.

I made a quick and dirty Fractal Flame implementation in Javascript/Svelte after stumbling across the fractal frame [Wikipedia](https://en.wikipedia.org/wiki/Fractal_flame) and [2008 Paper](https://flam3.com/flame_draves.pdf). I hadn't heard of fractals with gradients so it peaked my interest. It builds of an existing algorithm called chaos game with some randomness, non-linear functions, and color tinting to create colorful gradient fractals. Aside from looking pretty, this algorithm doesn't do anything else so enjoy!

Go ahead and try it out here:
[Fractal Flame Visualizer](/tools/fractal-flame/)

:::

::: {.col-xl-6}
![fractal(12).png](../../Attachments/fractal%2812%29.png)

:::

:::

The original chaos game/[IFS (Iterated Function System)](https://en.wikipedia.org/wiki/Iterated_function_system) algorithm works by jumping around a 2d plain by repeatedly applying a random affine transform from a specified list of available transforms. This is sufficient to create a black and white image of many fractals by filling in the pixel the algorithm reached after each jump.

The Fractal Flames Algorithm attempts to generalize these ideas by introduces many additional hyper-parameters including color tinting per transform that can be tuned to create something aesthetically pleasing.

Here is a non-exhaustive list of features implemented:

* A color corresponding to each transform function so as the algorithm jumps around it tints the color that is plotted (biased toward the last color/transform that was applied).
* The brightness of each pixel is computed using log density of how often that coordinate was traversed by the algorithm.
* Differing probabilities for choosing each transform function.
* Each transform function is made up of the weighted sum of one or more variant functions (ex: linear, swirl, sinusoidal, etc) from the papers pre-defined list that each have a pre & post affine transform.
