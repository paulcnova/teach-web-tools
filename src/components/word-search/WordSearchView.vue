
<script setup lang="ts">
	let size: number = 0;
	let grid: string[] = [];
	let words: string[] = [];
	
	function createGrid(size: number): string[] {
		const results: string[] = [];
		
		for(let i = 0; i < size * size; ++i) {
			results.push("");
		}
		
		return results;
	}
	
	function getIndex(x: number, y: number): number { return y * size + x; }
	function getX(index: number): number { return index % size; }
	function getY(index: number): number { return Math.trunc(index / size); }
	
	function updateWords(): void {
		const userWords = document.getElementById("user-words") as HTMLTextAreaElement;
		const sizeInput = document.getElementById("var-size") as HTMLInputElement;
		
		words = userWords.value.split("\n");
		size = Math.max(words.length, Number(sizeInput.value));
		grid = createGrid(size);
		
		updateWordSearchElem();
	}
	
	function updateWordSearchElem(): void {
		const wordSearchElem = document.getElementById("word-search");
		
		
	}
</script>

<style scoped>
	.half {
		background-color: red;
	}
	
	.height-25 { height: 25%; }
	.height-75 { height: 75%; }
	
	textarea.full-size {
		padding: 0;
		border: none;
	}
</style>

<template>
	<div class="grid fullscreen cc-2">
		<div class="half">
			<div class="height-75">
				<textarea class="full-size" id="user-words"></textarea>
			</div>
			<div class="height-25 grid cc-2">
				<div class="variables grid cc-3">
					<span class="input-title">Size:</span>
					<input type="number" class="span-2" id="var-size" />
				</div>
				<button v-on:click="updateWords()">Update</button>
			</div>
		</div>
		<div class="half">
			<div class="grid">
				
			</div>
		</div>
	</div>
</template>
