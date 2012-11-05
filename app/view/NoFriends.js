/*
 * File: app/view/NoFriends.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('JWF.view.NoFriends', {
    extend: 'Ext.Container',

    config: {
        cls: [
            'noFriends'
        ],
        tpl: [
            '<div class="welcomeNoFriends">',
            '<img src="https://graph.facebook.com/{id}/picture?type=square" />',
            'Welcome to Jog with Friends, <b>{first_name}</b>!',
            '</div>'
        ]
    }

});