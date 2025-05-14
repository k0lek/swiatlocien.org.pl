from PIL import Image
import os

# Ścieżka do katalogu ze zdjęciami
folder_path = os.getcwd() + "/images1/"  # np. "./obrazy"

# Maksymalne wymiary
MAX_SIZE = 2000
count = 0
# Obsługiwane rozszerzenia
image_extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp')
# Iteracja po wszystkich plikach w katalogu
for filename in os.listdir(folder_path):
    if filename.lower().endswith(image_extensions):
        filepath = os.path.join(folder_path, filename)
        try:
            with Image.open(filepath) as img:
                width, height = img.size

                # Sprawdzenie, czy któryś wymiar przekracza 2000
                if width > MAX_SIZE or height > MAX_SIZE:
                    # Oblicz współczynnik zmniejszania
                    scale = min(MAX_SIZE / width, MAX_SIZE / height)
                    new_size = (int(width * scale), int(height * scale))

                    # Zmiana rozmiaru z zachowaniem proporcji
                    resized_img = img.resize(new_size, Image.LANCZOS)
                    
                    # Nadpisz oryginalny plik (lub zapisz pod inną nazwą)
                    resized_img.save(os.getcwd() + "/images2/" + str(count) + ".jpg")
                    count += 1
                    print(f"Zmieniono rozmiar: {filename} -> {new_size}")
                else:
                    print(f"Bez zmian: {filename} ({width}x{height})")
        except Exception as e:
            print(f"Błąd przy przetwarzaniu {filename}: {e}")

