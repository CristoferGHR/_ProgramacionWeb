# Git mientras aprendo

Git guarda versiones de un proyecto. GitHub aloja una copia remota. Un *commit*
es una fotografía explicada de un cambio; `push` envía los commits a GitHub.

## Ciclo que repetiré en cada práctica

Desde la carpeta del repositorio:

```bash
git status
git diff
git add curso-html-css/01-html-semantico/index.html
git commit -m "Completa la práctica de HTML semántico"
git push
```

- `git status` dice qué cambió.
- `git diff` permite revisar el contenido antes de guardarlo.
- `git add` selecciona los archivos del siguiente commit.
- `git commit` guarda una versión local con un mensaje.
- `git push` publica los commits en GitHub.

Usa mensajes que expliquen el resultado: `Agrega formulario de registro` es más
claro que `cambios` o `tarea`.

## Comandos seguros para investigar

```bash
git log --oneline
git diff --staged
git show HEAD
```

Antes de cada commit responde: ¿qué cambié?, ¿por qué lo cambié? y ¿funciona en
pantalla grande y pequeña?
