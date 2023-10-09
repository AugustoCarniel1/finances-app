# FROM python:3.9.13

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# COPY . /app
# WORKDIR /app

# RUN pip3 install -r requirements.txt
# # RUN python manage.py makemigrations
# # RUN python manage.py migrate

# CMD gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 finapp.wsgi



FROM python:3.9.13

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /django
COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .