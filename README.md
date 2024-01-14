# Proje Vitrini

# Cloning the rep
1. Clone the repository:
```bash
git clone https://github.com/Puddichim/proje-vitrini
```
2. Create a virtual environment and activate it:
```bash
pip install virtualenv
virtualenv env
source env/bin/activate  # for Linux/MacOS
env\Scripts\activate.bat  # for Windows
```
3. Install the dependencies:
```bash
pip install -r requirements.txt
```

4. Create a .env file in the root directory of the project and add the following variables:
```bash
SECRET_KEY=your_secret_key_here
DEBUG=True
```
5. Run the migrations & migrate:
```bash
python manage.py makemigrations
python manage.py migrate
```

6. Create a superuser account:
```bash
python manage.py createsuperuser
```

7. Run the development server:
```bash
python manage.py runserver
```

