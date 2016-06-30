import React from 'react';
import { SeparateLine } from './separateLine';
import styles from '../../css/app.css';
require('font-awesome-webpack');

export const Todo = () => (
  <div className={styles.barsWraper}>
    <div className={styles.leftBar}>
      <article className={styles.latesList}>
        <header>
          <SeparateLine text="Latest"/>
        </header>
        <content>
          <article className={styles.latestItem}>
            <header>
              <a href="#">
                <img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty"/>
              </a>
              <h1><a href="#">Are you wasting your time with Facebook?</a></h1>
            </header>
            <content>
              <div className={styles.date}>27 Jun 2016</div>
              <p>
                By Debbie Mayo-Smith / 27 Jun 2016
                It seems the whole marketing world is screaming “Facebook! Facebook!
                Facebook!” You’ll hear it everywhere: “You must be on Facebook ...
              </p>
              <div className={styles.readMore}>
                <a href="#">Read more</a>
               </div>
            </content>
          </article>
          <article className={styles.latestItem}>
            <header>
              <a href="#">
                <h1>Are you wasting your time with Facebook?</h1>
              </a>
            </header>
            <content>
              <div className={styles.date}>27 Jun 2016</div>
              <p>
                By Debbie Mayo-Smith / 27 Jun 2016
                It seems the whole marketing world is screaming “Facebook! Facebook!
                Facebook!” You’ll hear it everywhere: “You must be on Facebook ...
              </p>
              <div className={styles.readMore}>
                <a href="#">Read more</a>
              </div>
            </content>
          </article>
          <article className={styles.latestItem}>
            <header>
              <a href="#">
                <h1>Are you wasting your time with Facebook?</h1>
              </a>
            </header>
            <content>
              <div className={styles.date}>27 Jun 2016</div>
              <p>
                By Debbie Mayo-Smith / 27 Jun 2016
                It seems the whole marketing world is screaming “Facebook! Facebook!
                Facebook!” You’ll hear it everywhere: “You must be on Facebook ...
              </p>
              <div className={styles.readMore}>
                <a href="#">Read more</a>
              </div>
            </content>
          </article>
        </content>
      </article>
    </div>

    <div className={styles.rightBar}>
      <article className={styles.featuredList}>
        <header>
          <SeparateLine text="Featured"/>
        </header>
        <content>
          <article className={styles.featuredItem}>
            <header>
              <div className={styles.leftSide}>
                <a href=""><img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty"/></a>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.category}>
                  <i className="fa fa-tag"></i>
                  <span className={styles.name}>LEADERSHIP</span>
                </div>
                <h1><a href="">Are you wasting your time with Facebook?</a></h1>
                <div className={styles.itemStatistic}>
                  <div className={styles.commentsCount}>
                    <i className="fa fa-comments"></i>
                    <span className={styles.value}>543</span>
                  </div>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </div>
            </header>
          </article>
          <article className={styles.featuredItem}>
            <header>
              <div className={styles.leftSide}>
                <a href=""><img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty"/></a>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.category}>
                  <i className="fa fa-tag"></i>
                  <span className={styles.name}>LEADERSHIP</span>
                </div>
                <h1><a href="">Are you wasting your time with Facebook?</a></h1>
                <div className={styles.itemStatistic}>
                  <div className={styles.commentsCount}>
                    <i className="fa fa-comments"></i>
                    <span className={styles.value}>543</span>
                  </div>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </div>
            </header>
          </article>
          <article className={styles.featuredItem}>
            <header>
              <div className={styles.leftSide}>
                <a href=""><img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty"/></a>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.category}>
                  <i className="fa fa-tag"></i>
                  <span className={styles.name}>LEADERSHIP</span>
                </div>
                <h1><a href="">Are you wasting your time with Facebook?</a></h1>
                <div className={styles.itemStatistic}>
                  <div className={styles.commentsCount}>
                    <i className="fa fa-comments"></i>
                    <span className={styles.value}>543</span>
                  </div>
                  <div className={styles.rating}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </content>
      </article>
      <div className={styles.popularCategories}>
        <SeparateLine text="popular categories"/>
        <div className={styles.itemsList}>
          <div className={styles.category}>
              <a href="#">
                <i className="fa fa-tag"></i>
                <span className={styles.name}>GROWTH</span>
             </a>
            <small className={styles.postsCount}>
              <i>(453 posts)</i>
            </small>
          </div>
          <div className={styles.category}>
            <a href="#">
              <i className="fa fa-tag"></i>
              <span className={styles.name}>GROWTH</span>
            </a>
            <small className={styles.postsCount}>
              <i>(453 posts)</i>
            </small>
          </div>
          <div className={styles.category}>
            <a href="#">
              <i className="fa fa-tag"></i>
              <span className={styles.name}>GROWTH</span>
            </a>
            <small className={styles.postsCount}>
              <i>(453 posts)</i>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);
