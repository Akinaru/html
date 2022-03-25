from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def principal():
    return render_template("on.html")




@app.route('/on/')
def on():

  print ('La led est ON')
  return render_template("on.html")






@app.route('/off/')
def off():

  print ('La led est OFF')
  return render_template("off.html")




if __name__ == '__main__':
  app.run(debug=True)